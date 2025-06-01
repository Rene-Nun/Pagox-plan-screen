'use client';

import React, { useState } from 'react';
import { ArrowLeft, Plane, CheckCircle, XCircle, TrendingUp, Calendar, CreditCard, AlertCircle } from 'lucide-react';

export default function FinancingPlan() {
  const [showTerms, setShowTerms] = useState(false);
  
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center p-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-2">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Plan de Financiamiento</h1>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Experience Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
              <Plane className="w-7 h-7 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Vuelo Redondo CDMX - Cancún</h2>
              <p className="text-gray-500 text-sm">Experiencia seleccionada</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Costo total</p>
              <p className="text-3xl font-bold text-gray-900">$8,000 <span className="text-lg font-normal text-gray-500">MXN</span></p>
            </div>
          </div>
        </div>

        {/* Financing Details */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Detalles del Financiamiento</h3>
          
          <div className="space-y-4">
            {/* Down Payment */}
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-100">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Enganche inicial</p>
                  <p className="text-sm text-gray-500">Pago requerido hoy</p>
                </div>
              </div>
              <p className="text-xl font-bold text-green-700">$1,200</p>
            </div>

            {/* Financed Amount */}
            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl border border-purple-100">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">Monto financiado</p>
                  <p className="text-sm text-gray-500">Por PagoX</p>
                </div>
              </div>
              <p className="text-xl font-bold text-purple-700">$6,800</p>
            </div>

            {/* Payment Schedule */}
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <p className="font-semibold text-gray-900">Plan de pagos</p>
              </div>
              <p className="text-gray-700 mb-2">Pagarás en <span className="font-bold">10 quincenas</span> de <span className="font-bold text-blue-700">$680 MXN</span> cada una</p>
              <p className="text-sm text-gray-500">Fecha límite final: <span className="font-medium">30 de Noviembre de 2025</span></p>
            </div>
          </div>
        </div>

        {/* PagoX Score */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
            <h3 className="text-lg font-bold text-gray-900">Score PagoX</h3>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-100">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600">Probabilidad de reventa</p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <span className="text-2xl font-bold text-emerald-700">90%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Este score indica la facilidad con la que tu boleto podría revenderse en nuestro marketplace si tus planes cambian.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button className="w-full bg-black text-white py-4 rounded-2xl font-semibold text-base hover:bg-gray-800 transition-colors flex items-center justify-center gap-3">
            <CheckCircle className="w-5 h-5" />
            Aceptar Plan de Financiamiento
          </button>
          
          <button className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold text-base hover:bg-gray-200 transition-colors flex items-center justify-center gap-3">
            <XCircle className="w-5 h-5" />
            Rechazar Oferta
          </button>
        </div>

        {/* Legal Notice */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-gray-600 leading-relaxed">
              <p className="mb-2">
                Al aceptar este plan, confirmas que has leído y aceptas nuestros{' '}
                <button 
                  onClick={() => setShowTerms(true)}
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  Términos y Condiciones
                </button>{' '}
                y{' '}
                <button 
                  onClick={() => setShowTerms(true)}
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  Política de Privacidad
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full max-h-[70vh] rounded-t-2xl overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Términos y Condiciones</h3>
                <button 
                  onClick={() => setShowTerms(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <XCircle className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-y-auto">
              <p className="text-sm text-gray-600 leading-relaxed">
                Aquí aparecerían los términos y condiciones completos de PagoX...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}