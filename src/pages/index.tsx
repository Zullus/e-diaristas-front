import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async() => {
  return {
    props: {
      title: 'Títula da Página',
    }
  }
}


export default function Index(){
  return (
    <div>
    </div>
  )
}

