import { Card } from "flowbite-react";

const TalentoHumanoCard = ({name, username, email}: {name: string, username: string, email: string}) => {
    return (
        <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Nombre de usuario: </span>{username}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Correo electrónico: </span>{email}</p>
        </Card>
    )
}

export default TalentoHumanoCard;