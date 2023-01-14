import Client from "../core/Client"
import { IconEdit, IcontTrash } from "./Icons"

interface tableProps {
    clients: Client[]
    selectClient?: (client: Client) => void
    deleteClient?: (client: Client) => void
}

export default function Table(props: tableProps) {

    const showActions = props.selectClient || props.deleteClient

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">id</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">idade</th>
                {
                    showActions ? (
                        <th className="text-center p-4">Ações</th>
                    )
                    :
                    (
                        false
                    )
                }
            </tr>
        )
    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id} className={
                    i % 2 == 0 ? 'bg-purple-200' : 'bg-purple-100'
                }>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className="flex justify-center items-center p-4">

                {
                    props.selectClient ? 
                    (
                            <button onClick={()=> props.selectClient?.(client)} className={`
                                flex justify-center items-center p-3
                                text-green-600 rounded-full
                                hover:bg-purple-100
                                `}>
                                <IconEdit />
                            </button>
                        )
                    :
                    (
                        false
                    )
                }

                {
                    props.deleteClient ? (
                        <button onClick={()=> props.deleteClient?.(client)} className={`
                            flex justify-center items-center p-3
                            text-red-600 rounded-full
                            hover:bg-purple-100
                `}>
                    <IcontTrash />
                </button>
                    )
                    :
                    (
                        false
                    )
                }
            </td>
        )
    }

    return (
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}