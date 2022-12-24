interface Props {
  id: number;
  title: string;
  description: string;
  school: string;
  date: string;
  idx: number;
}

export const TimeItem = ({ title, description, school, date, idx }: Props) => {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute -left-6  bg-indigo-500 text-gray-50 rounded-full ring-8 ring-white text-xl h-10 w-10 flex items-center justify-center">
        {idx + 1}
      </span>
      <h3 className="flex items-center mb-1 ax-w-xl ">{title}</h3>
      <time className="block mb-2 leading-none text-gray-400 dark:text-gray-500">
        <strong>Fecha:</strong> {date}
      </time>
      <span className="block mb-2 leading-none text-gray-400 dark:text-gray-500">
        <strong>Institución:</strong> {school}
      </span>
      <p className="mb-4 max-w-xl">{description}</p>
    </li>
  );
};
