import React from 'react'

const ImageHelper = ({product}) => {
    const imageurl = product 
    ? product.image 
    : `https://www.globalblue.com/business/images/article926851.ece/BINARY/TFS_Article_2019_970x643.jpg`
    return (
        <div className="rounded border border-success p-2">
            <img 
             src={imageurl}
             style={{maxHeight:"100%", maxWidth:"100%"}}
             className="mb-3 rounded"
             alt=""
            />
        

        </div>
    );
};

export default ImageHelper