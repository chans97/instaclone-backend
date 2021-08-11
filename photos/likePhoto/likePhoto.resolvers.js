import { protectedResolver } from "../../users/users.utils";
import client from "./../../client";

export default {
  Mutation: {
    toggleLike: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const likedphoto = await client.photo.findUnique({
        where: {
          id,
        },
      });
      if (!likedphoto) {
        return {
          ok: false,
          error: "no Photo",
        };
      }
      const likewhere = {
        userId_photoId: {
          userId: loggedInUser.id,
          photoId: id,
        },
      };

      const like = await client.like.findUnique({
        where: likewhere,
      });
      if (like) {
        await client.like.delete({
          where: likewhere,
        });
      } else {
        await client.like.create({
          data: {
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            photo: {
              connect: {
                id: likedphoto.id,
              },
            },
          },
        });
      }

      return {
        ok: true,
      };
    }),
  },
};
