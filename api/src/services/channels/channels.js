import { db } from 'src/lib/db';

export const channels = () => {
  return db.channel.findMany();
};

export const channel = ({ id }) => {
  return db.channel.findOne({
    where: { id },
  });
};

export const createChannel = ({ input }) => {
  return db.channel.create({
    data: input,
  });
};

export const updateChannel = ({ id, input }) => {
  return db.channel.update({
    data: input,
    where: { id },
  });
};

export const deleteChannel = ({ id }) => {
  return db.channel.delete({
    where: { id },
  });
};

export const Channel = {
  users: (_obj, { root }) => db.channel.findOne({ where: { id: root.id } }).users(),
  messages: (_obj, { root }) => db.channel.findOne({ where: { id: root.id } }).messages(),
};
