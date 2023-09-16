import React, { useRef, useState } from 'react'
import { useParams, } from 'react-router-dom'
import Loader from '../Components/Loader'
import '../Components/Css/SingleProduct.css'
import { useProduct } from '../Hooks/UseProduct'

function SingleProduct() {
    var {id, category} = useParams()
    var {data, isLoading} = useProduct(id)
  const [img,setImg] = useState(1)
  var clicked1 = useRef(null)
  var clicked2 = useRef(null)
  var clicked3 = useRef(null)
  const showImage = (event)=>{
    var image = event.target.getAttribute('val')
    var css = '1px solid gray'
    setImg(image)
    if(image==1){
      clicked1.current.style.border = css
    }else{
      clicked1.current.style.border = 'none'
    }
    if(image==2){
      clicked2.current.style.border = css
    }else{
      clicked2.current.style.border = 'none'
    }
    if(image==3){
      clicked3.current.style.border = css
    }else{
      clicked3.current.style.border = 'none'
    }
  }
  if (isLoading){
    return <div className='product-loader'><Loader/></div>
  }
  return (
    <>
    <div className="container porduct-detail">
        <div className="col-lg-5 col-12 product-image">
        <div className="col-8 display-image offset-md-2 offset-1">
        <img src={require('../ProductImages/'+category+'/' +id+'/img'+img+'.jpg')} alt=""  className='img-fluid'/>
        </div>
        <div className="col-4 side-images mt-3">
        <img ref={clicked1} src={require('../ProductImages/'+category+'/' +id+'/img1.jpg')} alt=""  onClick={showImage} val={1} style={{'border' : '1px solid gray'}}/>
        <img ref={clicked2} src={require('../ProductImages/'+category+'/' +id+'/img2.jpg')} alt=""  onClick={showImage} val={2} className=''/>
        <img ref={clicked3} src={require('../ProductImages/'+category+'/' +id+'/img3.jpg')} alt=""  onClick={showImage} val={3} className=''/>
        </div>

        </div>
    </div>
    </>
  )
}

export default SingleProduct
