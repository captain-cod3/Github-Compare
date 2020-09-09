import { act } from "react-dom/test-utils";

const initialstate = {
    name: "",
    login: "",
    followers: "",
    following: "",
    bio: "",
    avatar_url: "",
    public_repos: "",
    url:"",
    allData: []
}

const reducer = (state = initialstate, action) => {

    switch (action.type) {
        case "FETCH_DATA": 
        return {
            ...state,
            name: action.payload.name,
            login: action.payload.login,
            followers: action.payload.followers,
            following: action.payload.following,
            bio: action.payload.bio,
            avatar_url: action.payload.avatar_url,
            public_repos: action.payload.public_repos,
            url: action.payload.url,
        }
        case "ADD_DATA": 
        return {
        ...state,
        allData: [...state.allData, action.payload]
        }
        
    }

} 

export default reducer;