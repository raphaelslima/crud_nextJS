import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white text-gray-800
    `}>
      <Layout title="Cadastro simples">
          <span>Conteúdo</span>
      </Layout>
    </div>
  )
}
