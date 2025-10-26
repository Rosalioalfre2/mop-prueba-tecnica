import { HR } from "flowbite-react";

const Card = ({ title, body }: { title: string; body: string }) => {
    return (
        <div className="p-4 border rounded w-full bg-blue-100 dark:bg-blue-900 flex flex-col gap-2">
            <h3 className="font-bold text-2xl text-gray-800 dark:text-gray-300 text-center">{title}</h3>
            <HR className="w-full border-b-2 border-gray-300 dark:border-gray-500 m-0 p-0" />
            <p className="text-gray-700 dark:text-gray-200">{body}</p>
        </div>
    );
};

export default Card;