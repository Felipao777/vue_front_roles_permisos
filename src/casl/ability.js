import { Ability } from '@casl/ability'//pareciera que Ability esta en desuso, pero funciona

//const permisos = localStorage.getItem('permisos') ? localStorage.getItem('permisos') : null
const permisos = localStorage.getItem('permisos') ? JSON.parse(localStorage.getItem('permisos')) : null

export default new Ability(permisos || [{action: 'show', subject: 'auth'}])
