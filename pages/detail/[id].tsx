
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id:'1' } },
      { params: { id:'2' } },
      { params: { id:'3'} },
      { params: { id:'4'} },
      { params: { id:'5'} },
      { params: { id:'6'} },
      { params: { id:'7'} },
      { params: { id:'8'} },
      { params: { id:'9'} },
      { params: { id:'10'} },
      { params: { id:'11'} },
      { params: { id:'12'} },
      { params: { id:'13'} },
      { params: { id:'14'} },
      { params: { id:'15'} },
    ],
    fallback: false  // false or 'blocking'
  };
}

export async function getStaticProps() {
  const result=await axios.get('http://120.76.55.141:3005/products')
  return {
    props:{
      list:result.data
    }
  }
}
