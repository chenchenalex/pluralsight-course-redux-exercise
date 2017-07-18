import React from 'react';

const AuthorDetailPage = ({params})=>{
    return (
        <div className="author-info">
            <h1>{params.id}</h1>
            <table className="table">
                <thead>
                    <tr>No.</tr>
                    <tr>CourseName</tr>
                    <tr>Length</tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}

export default AuthorDetailPage;