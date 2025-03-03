import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Contactez-nous</h1>

        <div className="space-y-6 mb-8">
          <div className="flex items-start space-x-3">
            <Mail className="h-6 w-6 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">support@facebook.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="h-6 w-6 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold">Téléphone</h3>
              <p className="text-gray-600">+1 (650) 853-1300</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <MapPin className="h-6 w-6 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold">Adresse</h3>
              <p className="text-gray-600">
                1 Hacker Way, Menlo Park, CA 94025, États-Unis
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nom
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Votre message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
