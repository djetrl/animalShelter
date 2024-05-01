


const useFilterData = (data,searchInput, selectKind)=>{
  const searchEmp = (items, term) =>{
    if(term.lenght === 0){
      return items;
    }
    return items.filter(item=>{
      const toLowerCaseSearch = item.name.toLowerCase().split(/\s+/).join('');
      return toLowerCaseSearch.indexOf(term.toLowerCase()) > -1;
    })
    
  }
  
  const filterPost = (items, term) =>{
    if(term === "0"){
      return items;
    }
    return items.filter(item=>{
      if(item.kindsId == term){
        return item.kindsId
      }
    })
    
  }
  const visibleData = filterPost(searchEmp(data, searchInput), selectKind);
  return visibleData
}

export default useFilterData;