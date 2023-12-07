import { useState } from "react"
import { IoMdClose } from "react-icons/io";
import { IoMdSave } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

export default function Categorize({getQuestionData}) {
  const [catetoryData, setCategoryData] = useState([""]);
  const [itmes, setItmes] = useState([{
    item : "",
    belongesto: ""
  }]);
  const [Description, setDescription] = useState("");
  const [save, setSave] = useState(true);

  //category
  const handleCategory = (value,index) =>{
    const inputData = [...catetoryData];
    inputData[index] = value;
    setCategoryData(inputData);
  }

  const handleAddNewCateInpute = () =>{
    const temp = [...catetoryData,[]];
    setCategoryData(temp);
  }

  const handleCateDelete = (index) =>{
    const deleteValue = [...catetoryData];
    deleteValue.splice(index,1);
    setCategoryData(deleteValue);
  }
  
  //itmes
  const handleAddItem = () =>{
    const temp = [...itmes,{}]
    setItmes(temp);
  }

  const handleAddItemvalue = (value,index) =>{
    const inputData = [...itmes];
    inputData[index].item = value;
    setItmes(inputData);
  }

  const handleBelongesTo = (value, index) =>{
    const inputData = [...itmes];
    inputData[index].belongesto = value;
    setItmes(inputData);
  }

  const handleItemDelete = (index) =>{
    const deleteValue = [...itmes];
    deleteValue.splice(index,1);
    setItmes(deleteValue);
  }

  const handleSave = () =>{
    setSave((prev)=> !prev);
    let data = {
      description :Description,
      categories: catetoryData,
      questiontype : "Categorize",
      questions : [
        ...itmes
      ]
    }
    getQuestionData(data)
  }


  return (
    <div className="">
      <div className="w-11/12 m-auto flex justify-end">
        <button onClick={handleSave}>{save ? <IoMdSave size={30}/> : <FaEdit size={30}/>}</button>
      </div>
        <input type="text" className="w-5/6 border-2 h-10 rounded-md m-5 px-3" value={Description} onChange={(e) => setDescription(e.target.value)} disabled={save===false} placeholder="Description Text"/>
        <p className="text-left w-5/6 m-auto my-3 text-lg">Media</p>
        <div className="flex flex-col w-5/6 m-auto my-3">
          <input type="file" className=""/>
        </div>
        <div className="flex w-5/6 m-auto">
        </div>
        <p className="text-left w-5/6 m-auto my-3 text-lg">Categories</p>
        <div className="flex flex-col w-5/6 m-auto mb-5">
          {
            catetoryData.map((el,i)=>{
              return(
                <div key={i} className="flex">
                  <input type="text" value={el} disabled={save===false} className="w-1/3.5 border-2 h-10 rounded-md m-2 px-3" placeholder={`Category ${i+1}`} onChange={(e)=> handleCategory(e.target.value,i)}/>
                  {
                    save&&<button onClick={()=> handleCateDelete(i)}><IoMdClose size={30}/></button>
                  }
                </div>
              )
            })
          }
          {
            save && <button className="w-20 px-5 py-2 bg-black mx-2.5 text-white rounded-md" onClick={handleAddNewCateInpute}>Add</button>
          }
        </div>
        <p className="text-left w-5/6 m-auto my-3 text-lg">Items</p>
        <div className="flex flex-col w-5/6 m-auto items-start">
          {
            itmes.map((el,i)=>{
              return(
                <div key={i} className="w-full flex justify-between items-center">
                  <div className="flex items-center w-1/2">
                    <input value={el.item} type="text" disabled={save===false} className="border-2 h-10 rounded-md m-2 px-3" placeholder={`Item ${i+1}`} onChange={(e) => handleAddItemvalue(e.target.value,i)}/>
                    {
                      save&&<button onClick={()=>handleItemDelete(i)}><IoMdClose size={30}/></button>
                    }
                  </div>
                  <select disabled={save===false} className="w-1/4 border-2 h-10 rounded-md m-2 px-3" onChange={(e)=> handleBelongesTo(e.target.value,i)}>
                    <option value="">Select</option>
                    {
                      catetoryData.map((el,index) =>{
                        return(
                          <option key={index} value={el}>{el}</option>
                        )
                      })
                    }
                  </select>
                </div>
              )
            })
          }
          {
            save && <button className="px-5 py-2 bg-black mx-2.5 text-white rounded-md" onClick={handleAddItem}>Add Item</button>
          }
        </div>
        <br/>
    </div>
  )
}
