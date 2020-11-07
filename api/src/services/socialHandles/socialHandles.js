import { db } from 'src/lib/db';
import { foreignKeyReplacement } from 'src/lib/hackyFix';

export const socialHandles = () => {
  return db.socialHandle.findMany();
};

export const socialHandle = ({ id }) => {
  return db.socialHandle.findOne({
    where: { id },
  });
};

export const createSocialHandle = ({ input }) => {
  return db.socialHandle.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateSocialHandle = ({ id, input }) => {
  return db.socialHandle.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteSocialHandle = ({ id }) => {
  return db.socialHandle.delete({
    where: { id },
  });
};

export const SocialHandle = {
  user: (_obj, { root }) => db.socialHandle.findOne({ where: { id: root.id } }).user(),
};
