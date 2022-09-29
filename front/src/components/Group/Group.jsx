import React, { useEffect, useState } from "react";
import instance from "../../api/ApiService";
import GroupTable from "./GroupTable";
import GroupCreateButton from "./GroupCreateButton";

const Group = () => {
  const [groups, setGroups] = useState([]);
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    instance.get('/groups/').then(res => setGroups(res.data))
    setIsFetching(false)
  }, [isFetching, setIsFetching])

  function createGroup(name, description) {
    instance.post('/groups/create/', {
      name: name,
      description: description
    })
  }

  function deleteGroup(group_id) {
    instance.delete(`/groups/${group_id}/delete/`)
  }

  function updateGroup(group_id, name, description) {
    instance.put(`/groups/${group_id}/update/`, {
      name: name,
      description: description
    })
  }

  return (
    <div>
        <GroupCreateButton createGroup={createGroup} setIsFetching={setIsFetching}/>
        <GroupTable groups={groups} deleteGroup={deleteGroup} updateGroup={updateGroup} setIsFetching={setIsFetching} />
    </div>
  );
};

export default Group;
