import { useEffect, useState } from "react";
import CollectionClient from "../backend/db/collectionClient";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import ClientRepository from "../core/clientRepository";

export default function Home() {

  const repo: ClientRepository = new CollectionClient()

  const [renderTable, setView] = useState<'table' | 'form'>('table')
  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  useEffect(getall, [])
  
  function getall(){
    repo.getAll().then(clients => {
      setClients(clients)
      setView('table')
    })

  }

  function selectClient(client: Client) {
    setClient(client)
    setView('form')
  }

  async function deleteClient(client: Client) {
    await repo.remove(client)
    getall()
  }

  async function saveClient(client: Client){
    await repo.save(client)
    getall()
  }

  function newClient(){
    setClient(Client.empty())
    setView('form')
  }


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
                <div className={" flex justify-end"} onClick={newClient}>
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
              client={client} 
              cancel={()=> setView('table')}
              changeClient={saveClient}
              />
            )
        }
      </Layout>
    </div>
  )
}
