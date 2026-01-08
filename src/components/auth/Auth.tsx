import { Stack, TextField, Button } from "@mui/material"
import { useState } from "react"

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
			/>
			<TextField 
				type="password"
				label="Password"
				variant="outlined"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button 
				variant="contained"
			>
				Login
			</Button>
		</Stack>
	)
}

export default Auth;