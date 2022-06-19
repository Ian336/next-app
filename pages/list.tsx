import { useRouter } from 'next/router'
import axios from 'axios'
export default function list(props:any) {



  return (
    <div>
      {
        props.list.map((user:any)=>{
          return(
            <li key={user.id}>
              {user.title}
            </li>
          )
        })
      }
    </div>
  )
}

export async function getStaticProps() {
  const result=await axios.get('http://120.76.55.141:3005/products')
  return {
    props:{
      list:result.data
    }
  }
}
