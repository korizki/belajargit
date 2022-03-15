import React from 'react';

function TabelBuku({ showEdit, items, requestToDelete }){
    function editData(item){
        showEdit(item);
    }
    function hapusData(item){
        requestToDelete(item)
    }
    return(
        <div>
            <h4>Tabel Data Buku</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Judul</th>
                        <th>Pengarang</th>
                        <th className="col-3">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index)=>(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.judul}</td>
                        <td>{item.pengarang}</td>
                        <td>
                            <button className="btn-sm btn-warning mx-2" onClick={()=>editData(item)}>Edit</button>
                            <button className="btn-sm btn-danger" onClick={()=>hapusData(item)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabelBuku;