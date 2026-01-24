import { Stack, TextField, Button } from "@mui/material"
import { useEffect, useState } from "react"
import useGetMe from "../../hooks/useGetMe";
import { useNavigate } from "react-router-dom";

interface AuthProps {
	submitLabel: string;
	onSubmit: (credentials:{email: string; password: string}) => Promise<void>;
	children: React.ReactNode; // this is any react node that can be rendered
	error?: string;
}

const Auth = ({submitLabel, onSubmit, children, error}: AuthProps) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { data } = useGetMe();
	const navigate = useNavigate();

	useEffect(() => {
		if (data) {
			navigate('/')
		} 
	}, [data, navigate])

	return (
		<Stack 
			spacing={3} 
			sx={{
				height: "100vh",
				// for responsiveness, if screen is xs, then width is 70%, if medium, then 30%
				maxWidth: { xs: "70%", md: "30%" }, 
				margin: "0 auto",
				justifyContent: "center"
			}}
		>
			<TextField 
				type="email"
				label="Email"
				variant="outlined"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				error={!!error}
				helperText={error}
			/>
			<TextField 
				type="password"
				label="Password"
				variant="outlined"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				error={!!error}
				helperText={error}
			/>
			<Button 
				variant="contained"
				onClick={() => onSubmit({email:email, password:password})}
			>
				{submitLabel}
			</Button>
			{children}
		</Stack>
	)
}

export default Auth;