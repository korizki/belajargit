import React, {useState, useEffect} from 'react';
import TabelBuku from './TabelBuku';
import axios from 'axios';

function ManajemenBuku(){
    //part data
    const [formMode, setFormMode] = useState("");
    const [items, setItems ] = useState([]);
    const [inputForm, setInputForm] = useState();
    //part event handling
    function showForm(){
        setInputForm("");
        setFormMode("show");
    }
    function showEditForm(item){
        setInputForm(item);
        setFormMode("edit");
    }
    useEffect(()=>{
        retrieveData();
    }, []);
    function retrieveData(){
        axios.get("http://localhost:4000/item")
        .then((response)=>{setItems(response.data)})
        .catch(function(error){ console.log(error.response.data)})
    }
    function handleJudul(e){
        setInputForm({...inputForm, judul: e.target.value})
    }
    function handlePengarang(e){
        setInputForm({...inputForm, pengarang: e.target.value})
    }
    function submitForm(event){
        event.preventDefault();
        if(formMode ===" create"){
            axios.post("http://localhost:4000/item/add", inputForm)
            .then(()=>{
                alert("Data berhasil ditambahkan");
                retrieveData();
            })
            .catch((error)=>{console.log(error.response)})
        }
        if(formMode ==="edit"){
            axios.put("http://localhost:4000/item/update/"+inputForm._id, inputForm)
            .then(()=>{
                retrieveData();
                alert("Data berhasil diubah!");
            })
            .catch((error)=>{console.log(error.response)})
        }
    }
    function hapusData(item){
        axios.delete("http://localhost:4000/item/delete/"+item._id)
        .then(()=>{
            retrieveData();
            alert('Data berhasil dihapus!');
        })
        .catch((error)=>{console.log(error.response)})
    }
    return(
        <div className="container">
            <h1>Manajemen Data Buku</h1>
            <div style={{ textAlign: "left" }}>
                <button className="btn btn-sm btn-primary" onClick={showForm}>Tambah Data</button>
            </div>
            { formMode !== "" &&  (
                <div id="form" className="card py-2 my-3 bg-secondary">
                    <div className="card-body">
                        <h4>Form Buku</h4>
                        <form action="#" className="row" onSubmit={submitForm}>
                            <div className="col-6">
                                <input type="text"
                                name="judul"
                                className="form-control mx-2"
                                placeholder="Judul"
                                value = {inputForm.judul || ""}
                                onChange = {handleJudul}
                                />
                            </div>
                            <div className="col-4">
                                <input type="text" 
                                name="pengarang"
                                className="form-control mx-2"
                                placeholder="Pengarang"
                                value = {inputForm.pengarang || ""}
                                onChange = {handlePengarang}
                                />
                            </div>
                            <div className="col-2">
                                <input type="submit" className="btn btn-success" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <TabelBuku showEdit = {showEditForm} items={items} requestToDelete = {hapusData}/>
        </div>

    )
}

export default ManajemenBuku;