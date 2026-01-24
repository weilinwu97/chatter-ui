import type { CombinedGraphQLErrors } from "@apollo/client";

const extractErrorMessage = (err: CombinedGraphQLErrors) => {
	const errorMessage = err.errors[0]?.extensions?.originalError?.message;
	if (!errorMessage) return;
	if (Array.isArray(errorMessage)) {
		return formatErrorMessage(errorMessage[0]);
	} else {
		return formatErrorMessage(errorMessage)
	}
}

const formatErrorMessage = (message: string) => {
	return message.charAt(0).toUpperCase() + message.slice(1);
}

export default extractErrorMessage;