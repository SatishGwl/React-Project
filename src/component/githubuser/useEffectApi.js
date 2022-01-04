import React, {useEffect, useState} from 'react'
import '../githubuser/github.css'

function UseEffectApi() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
    // const data = await response.json()
    setUsers(await response.json())
    console.log('===response===', response);
  }
  useEffect(() => {
    getUsers()
  },[])
  return (
    <div>
      <h2>List of GitHub Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {
            users.map((currentElem) => {
              //desctructring
              const {id, thumbnailUrl, title, login} = currentElem
              return(
                <div className="col-10 col-md-4 mt-5" key={id}>
                  <div className="card p-2">
                    <div className="d-flex align-items-center">
                      <div className="image"> <img src={thumbnailUrl} className="rounded" width="155" /> </div>
                      <div className="ml-3 w-100">
              <h4 className="mb-0 mt-0 textLeft">{login}</h4>
              <span className="text-left">Developer Name: {title}</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                          <div className="d-flex flex-column">
                            <span className="articles">Articles</span> <span className="number1">38</span> </div>
                          <div className="d-flex flex-column">
              <span className="followers">Followers</span> <span className="number2">{currentElem.id}</span> </div>
                          <div className="d-flex flex-column">
              <span className="rating">Rating</span> <span className="number3">{currentElem.id}</span> </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default UseEffectApi
