import Link from "next/link";
import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clients: any = [
    new Client('Raphael', 24, '1'),
    new Client('Raka', 51, '2'),
    new Client('Ana', 23, '3')
  ]

  function selectClient(client: Client) {
    console.log(client.name)
  }

  function deleteClient(client: Client) {
    console.log(client.name)
  }

  function saveClient(client: Client){
    console.log(client)
  }

  const [renderTable, setView] = useState<'table' | 'form'>('table')

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white text-gray-800
    `}>
      <Layout title="Cadastro simples">

        {
          renderTable == 'table' ?
            (
              <>
                <div className={" flex justify-end"} onClick={()=> setView('form')}>
                  <Button color='green' className={`mb-4`}>Novo Cliente</Button>
                </div>
                <Table clients={clients} selectClient={selectClient}
                  deleteClient={deleteClient}
                />
              </>
            )
            :
            (
              <Form 
              client={clients[0]} 
              cancel={()=> setView('table')}
              changeClient={saveClient}
              />
            )
        }
      </Layout>
    </div>
  )
}
