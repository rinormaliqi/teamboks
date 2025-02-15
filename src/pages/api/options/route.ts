import type { NextApiRequest, NextApiResponse } from "next";

type Option = {
  label: string;
  value: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Option[]>,
) {
  const options: Option[] = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  res.status(200).json(options);
}
