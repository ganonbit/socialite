import { db } from 'src/lib/db';
import { foreignKeyReplacement } from 'src/lib/hackyFix';

export const messages = () => {
  return db.message.findMany();
};

export const message = ({ id }) => {
  return db.message.findOne({
    where: { id },
  });
};

export const createMessage = ({ input }) => {
  return db.message.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateMessage = ({ id, input }) => {
  return db.message.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteMessage = ({ id }) => {
  return db.message.delete({
    where: { id },
  });
};

export const Message = {
  sentBy: (_obj, { root }) => db.message.findOne({ where: { id: root.id } }).sentBy(),
  channel: (_obj, { root }) => db.message.findOne({ where: { id: root.id } }).channel(),
};
