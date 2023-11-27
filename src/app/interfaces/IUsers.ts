export interface IUsers {
	username: string,
	nickname: string,
	email: string,
	cpf: string,
	birthday: string,
	job: string,
	address: {
		cep: string,
		street: string,
		neighborhood: string,
		houseNumber: number,
		addressObs: string,
		city: string,
		uf: string,
		country: string
	},
	isStudent: boolean,
	course: string,
	password: string,
	confirmPassword?: string
}
