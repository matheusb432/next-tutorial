import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../interfaces/user';

const users: User[] = [];

export default function method(req: NextApiRequest, res: NextApiResponse<object>) {
  if (req.method === 'GET') {
    get(req, res);
  } else if (req.method === 'POST') {
    post(req, res);
  } else {
    invalidMethod(res);
  }
}

function get(req: NextApiRequest, res: NextApiResponse<User[]>) {
  res.status(200).json(users);
}

function post(req: NextApiRequest, res: NextApiResponse<object>) {
  let parsedBody;

  if (typeof req.body !== 'object') {
    parsedBody = JSON.parse(req.body);
  } else {
    parsedBody = req.body;
  }

  const user = {
    id: users.length + 1,
    ...parsedBody,
  };

  users.push(user);

  res.status(201).send({ id: user.id });
}

const invalidMethod = (res: NextApiResponse) => res.status(405).send({});
