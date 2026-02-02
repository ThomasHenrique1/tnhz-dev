import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

interface StatusMessageProps {
  status: "idle" | "success" | "error";
}

export default function StatusMessage({ status }: StatusMessageProps) {
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
      >
        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
        <div>
          <p className="font-medium text-green-800 dark:text-green-300">Mensagem enviada!</p>
          <p className="text-sm text-green-700 dark:text-green-400">
            Obrigado pelo contato. Responderei em breve.
          </p>
        </div>
      </motion.div>
    );
  }

  if (status === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
      >
        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
        <div>
          <p className="font-medium text-red-800 dark:text-red-300">Erro ao enviar</p>
          <p className="text-sm text-red-700 dark:text-red-400">
            Houve um problema. Tente novamente ou entre em contato por email.
          </p>
        </div>
      </motion.div>
    );
  }

  return null;
}