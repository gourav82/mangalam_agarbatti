import React, { useEffect, useState } from 'react'
import Card from './Card';
import Modal from '../core/Modal';
import ModalCard from './ModalCard';

const LatestItems = ({displayToast}) => {
const [latestpro, setLatestPro] = useState();
const [modal, setModal] = useState(false);
  const [items,setItems] = useState({});

  const handleModal =(item)=>{
    setModal(!modal);
    setItems(item);
}

// useEffect(()=>{
//     getLatestPro();
// },[])

// const getLatestPro=()=>{
//     latestProductAPI().then((result) => {
//         setLatestPro(result);
//         console.log(result);
//     }).catch((err) => {
        
//     });
// }

    return (
        <>
        <div className="container--responsive font--center mb--1000">
            <div className="flex flex--wrap mt--30">
            {product.map((item,index)=>{
                return(
               <React.Fragment key={`peoduct-${index}`} >
                    <Card item={item} latest={true} handleModal={handleModal}/>
                </React.Fragment>
                )
            })}
            </div>
           <div className="block--auto mb--30 mt--30">
           <button className='width--column-two-10 bg--error pd--10 color--white fs--25 bg--radius'>See More</button>
           </div>
        </div>
        {modal? 
            <Modal show={modal} position="left" className={"width--column-three-5"} isDrawer={false} hideClose={true} close={() => setModal(false)}>
            <ModalCard items={items} handleModal={handleModal} displayToast={displayToast}/>
           </Modal>
            : ""}
            </>
    )
}

export default LatestItems;

 const product =[
  {
    img:"/assets/image/phonik5.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"2",
    mrp:"15"
  },
  {
    img:"/assets/image/phonik2.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"4",
    mrp:"15"
  },
  {
    img:"/assets/image/phonik3.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"5",
    mrp:"15"
  },
  {
    img:"/assets/image/phonik4.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"3",
    mrp:"15"
  },
  {
    img:"/assets/image/mix.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"2",
    mrp:"15"
  },
  {
    img:"/assets/image/zipper.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"4",
    mrp:"15"
  },
  {
    img:"/assets/image/mosquito.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"1",
    mrp:"15"
  },
  {
    img:"/assets/image/m_stick1.jpg",
    name:"MOsquito Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"1",
    mrp:"15"
  },
  {
    img:"/assets/image/m_stick.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"1",
    mrp:"15"
  },
  {
    img:"/assets/image/healthy.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"1",
    mrp:"15"
  },
  {
    img:"/assets/image/phonik6.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"1",
    mrp:"15"
  },
  
]