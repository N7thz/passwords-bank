interface PasswordOptions {
	length?: number
	includeNumbers?: boolean
	includeLowercase?: boolean
	includeUppercase?: boolean
	includeSpecialChars?: boolean
}

export function generateAdvancedPassword(options: PasswordOptions = {}) {
	
	const {
		length = 16,
		includeNumbers = true,
		includeLowercase = true,
		includeUppercase = true,
		includeSpecialChars = true,
	} = options

	const requirements = []
	let allChars = ""

	if (includeLowercase) {
		requirements.push({
			regex: /[a-z]/,
			chars: "abcdefghijklmnopqrstuvwxyz"
		})

		allChars += "abcdefghijklmnopqrstuvwxyz"
	}

	if (includeUppercase) {
		requirements.push({
			regex: /[A-Z]/,
			chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		})

		allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	}

	if (includeNumbers) {
		requirements.push({
			regex: /[0-9]/,
			chars: "0123456789"
		})
		allChars += "0123456789"
	}

	if (includeSpecialChars) {
		allChars += "!@#$%^&*()_+-=[]{}|:,.<>?"
	}

	const actualLength = Math.max(length, 6)
	let password = ""
	let isValid = false

	while (!isValid) {
		password = ""

		for (const requirement of requirements) {
			const randomIndex = Math.floor(Math.random() * requirement.chars.length)
			password += requirement.chars[randomIndex]
		}

		const remainingLength = actualLength - password.length

		for (let i = 0; i < remainingLength; i++) {
			const randomIndex = Math.floor(Math.random() * allChars.length)
			password += allChars[randomIndex]
		}

		password = password
			.split("")
			.sort(() => Math.random() - 0.5)
			.join("")

		isValid = requirements.every((req) => req.regex.test(password))
	}

	return password
}
