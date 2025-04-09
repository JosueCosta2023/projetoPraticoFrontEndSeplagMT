import React, { useState } from "react";

interface ModalFormularioProps {
  isOpen: boolean;
  onClose: () => void;
  nome: string;
  cidade: string;
}

const ModalFormulario: React.FC<ModalFormularioProps> = ({ isOpen, onClose, nome, cidade }) => {
  const [mensagem, setMensagem] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para uma API
    console.log({ nome, cidade, mensagem, imagem });
    alert("Muito obrigado por nos ajudar com essas informações!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4">Enviar informações</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Nome do Desaparecido</label>
            <input
              type="text"
              value={nome}
              readOnly
              disabled
              className="w-full text-gray-600 border rounded-lg p-2 bg-black"
            />
          </div>

          <div>
            <label className="block font-medium">Ultima cidade que esteve</label>
            <input
              type="text"
              value={cidade}
              readOnly
              disabled
              className="w-full text-gray-600 border rounded-lg p-2 bg-black"
            />
          </div>
          <div>
            <label className="block font-medium">Digite seu nome</label>
            <input
              type="text"
              name="nomeUsuario"
              required
              placeholder="Nome Completo"
              className="w-full text-white border rounded-lg p-2 bg-black"
            />
          </div>

          <div>
            <label className="block font-medium">Digite seu e-Mail</label>
            <input
              type="email"
              name="emailUsuario"
              required
              placeholder="Seu melhor E-mail"
              className="w-full border text-white rounded-lg p-2 bg-black"
            />
          </div>

          <div>
            <label className="block font-medium">Informações adicionais</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
              className="w-full border rounded-lg resize-none bg-black text-white p-2 min-h-[100px]"
              placeholder="Digite aqui o que sabe..."
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Imagem (opcional)</label>
            <i className="text-sm mb-2 inline-block text-gray-300">Você pode enviar apenas 1 arquivo e somente em formato png.</i>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImagem(e.target.files?.[0] || null)}
              className="w-full"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalFormulario;
