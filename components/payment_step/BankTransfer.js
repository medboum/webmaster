import React from 'react'
import InfoRow from './InfoRow'

export default function BankTransfer() {
  return (
    <div className="my-3 flex flex-col">
      <div className="mt-3 flex flex-col items-center justify-center">
        <p className="font-arabicBold text-[18px] text-green-600">
          تعليمات التحويل البنكي
        </p>
        <p className="font-arabicMedium text-sm text-red-600 opacity-80">
          الرجاء تحويل المبلغ الى حسابنا البنكي
        </p>
      </div>
      <div className="mt-3">
        <InfoRow title="اسم البنك" value="بنك البركة" />
        <InfoRow title="رقم الحساب" value="33366236263711" />
        <InfoRow
          title="Ism lbanka"
          value="CIH Bank CIH Bank CIH Bank CIH Bank CIH Bank CIH Bank"
        />
      </div>
    </div>
  )
}
