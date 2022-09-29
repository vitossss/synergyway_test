import React, { useEffect, useState } from "react";
import instance from "../../api/ApiService";
import UserTable from "./UserTable";
import UserCreateButton from "./UserCreateButton";

const User = () => {
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    instance.get('/users/').then(res => setUsers(res.data));
    instance.get('/groups/').then(res => setGroups(res.data));
    setIsFetching(false)
  }, [isFetching, setIsFetching])

  function createUser(username, group_id) {
    instance.post('/users/create/', {
      username: username,
      groups: group_id
    })
  }

  function deleteUser(user_id) {
    instance.delete(`/users/${user_id}/delete/`)
  }

  function updateUser(user_id, username, group_id) {
    instance.put(`/users/${user_id}/update/`, {
      username: username,
      groups: group_id
    })
  }

  return (
    <div>
      <UserCreateButton groups={groups} createUser={createUser} setIsFetching={setIsFetching}/>
      <UserTable users={users} groups={groups} deleteUser={deleteUser} updateUser={updateUser} setIsFetching={setIsFetching}/>
    </div>
  );
};

export default User;
