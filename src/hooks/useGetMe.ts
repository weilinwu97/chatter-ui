import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import type { User } from "../models/User";

const GET_ME = gql`
	query Me {
		me {
			_id, 
			email
		}
	}
` 

const useGetMe = () => {
	return useQuery<{ me: User }>(GET_ME)
}

export default useGetMe;