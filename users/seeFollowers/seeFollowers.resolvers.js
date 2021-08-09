import client from "../../client";
export default {
  Query: {
    seeFollowers: async (_, { username, page }) => {
      const checkUser = client.user.findUnique({
        where: { username },
        select: { id: true },
      });
      if (!checkUser) {
        return {
          ok: false,
          error: "No user",
        };
      }
      const followers = client.user
        .findUnique({
          where: { username },
        })
        .followers({ take: 5, skip: (page - 1) * 5 });
      const totalFollowers = await client.user.count({
        where: {
          followers: {
            some: { username },
          },
        },
      });

      return {
        ok: true,
        followers,
        totalPages: Math.ceil(totalFollowers / 5),
      };
    },
  },
};
