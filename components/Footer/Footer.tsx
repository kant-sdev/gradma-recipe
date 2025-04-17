import Link from "next/link"
import { Utensils, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Utensils className="h-6 w-6 text-orange-500" />
                            <span className="font-bold text-xl">Bella Receitas</span>
                        </div>
                        <p className="text-gray-400">Descubra receitas deliciosas todos os dias!</p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4">Navegação</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/categorias" className="text-gray-400 hover:text-white">
                                    Categorias
                                </Link>
                            </li>
                            <li>
                                <Link href="/favoritos" className="text-gray-400 hover:text-white">
                                    Favoritos
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre" className="text-gray-400 hover:text-white">
                                    Sobre Nós
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4">Categorias</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/categorias/cafe-da-manha" className="text-gray-400 hover:text-white">
                                    Café da Manhã
                                </Link>
                            </li>
                            <li>
                                <Link href="/categorias/almoco" className="text-gray-400 hover:text-white">
                                    Almoço
                                </Link>
                            </li>
                            <li>
                                <Link href="/categorias/jantar" className="text-gray-400 hover:text-white">
                                    Jantar
                                </Link>
                            </li>
                            <li>
                                <Link href="/categorias/sobremesas" className="text-gray-400 hover:text-white">
                                    Sobremesas
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4">Contato</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>contato@bellareceitas.com</li>
                            <li>+55 (11) 99999-9999</li>
                            <li>São Paulo, SP - Brasil</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Bella Receitas. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
