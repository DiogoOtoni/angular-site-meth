export interface IUsers {
	_idUser: string | number,
	username: string,
	nickname: string,
	email: string,
	cpf: string,
	birthday: string,
	job: string,
	userStatus: string,
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
