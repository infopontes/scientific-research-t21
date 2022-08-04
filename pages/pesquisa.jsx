export default function Pesquisa() {
  return (
    <div className="h-screen grid items-center justify-center">

        <div className="bg-blue-400 px-6 py-6 mt-4 mb-4 rounded">
            <h6 className="
                text-3xl
                font-extrabold
                tracking-tight
                text-gray-900
                mt-2
            ">Pesquisa sobre </h6>
            <h6 className="
                text-3xl
                font-extrabold
                tracking-tight
                text-pink-500
            ">Sídrome de Down</h6>
        
            <form className='mt-6' action="https://docs.google.com/forms/d/e/1FAIpQLSf9addDLn0mtua0oIf8GltT_fRiirBqHl_RbniKJVUy191k5Q/formResponse">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">1. Você é pai ou responsável de um adulto ou idoso com T21?</h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p1-sim" type="radio" value="Sim" name="entry.1754387032" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Sim</label>
                        </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p1-nao" type="radio" value="Não" name="entry.1754387032" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Não</label>
                        </div>
                    </li>
                </ul>

                <h3 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">2. Qual a idade do seu filho(a)? </h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-20-30" type="radio" value="< 21" name="entry.1417970946" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"> &lt; 21</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-31-40" type="radio" value="21 a 30" name="entry.1417970946" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">21 a 30</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-40-50" type="radio" value="31 a 40" name="entry.1417970946" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">31 a 40</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-50-60" type="radio" value="41 a 50" name="entry.1417970946" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">41 a 50</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-50-60" type="radio" value="> 50" name="entry.1417970946" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">&gt; 50</label>
                        </div>
                    </li>
                </ul>

                <h3 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">3. Qual gênero do seu filho(a)?</h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-feminino" type="radio" value="Feminino" name="entry.388950100" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Feminino</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-masculino" type="radio" value="Masculino" name="entry.388950100" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Masculino</label>
                        </div>
                    </li>
                </ul>

                <h3 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">4. Quando criança ele/ela teve contato com a Terapia Ocupacional?</h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p4-sim" type="radio" value="Sim" name="entry.1182321410" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Sim</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p4-nao" type="radio" value="Não" name="entry.1182321410" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Não</label>
                        </div>
                    </li>
                </ul>

                <h3 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">5. Por quanto tempo ele /ela foi assitido pela TO?</h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-5-10" type="radio" value="menos 6" name="entry.1158514225" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">menos 6</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-5-10" type="radio" value="6-10" name="entry.1158514225" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">6-10</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-10-15" type="radio" value="11-15" name="entry.1158514225" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">11-15</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-15-20" type="radio" value="16-20" name="entry.1158514225" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">16-20</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-15-20" type="radio" value="mais 20" name="entry.1158514225" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">mais 20</label>
                        </div>
                    </li>
                </ul>

                <h3 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">6. Quando criança ele /ela teve contato com o dentista?</h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p6-sim" type="radio" value="Sim" name="entry.1457821798" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Sim</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p6-nao" type="radio" value="Não" name="entry.1457821798" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Não</label>
                        </div>
                    </li>
                </ul>

                <h3 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">7. Como você classNameifica a saúde bucal do seu filho?</h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p7-ruim" type="radio" value="ruim" name="entry.383361519" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">ruim</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p7-regular" type="radio" value="regular" name="entry.383361519" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">regular</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p7-boa" type="radio" value="boa" name="entry.383361519" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">boa</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p7-otima" type="radio" value="ótima" name="entry.383361519" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">ótima</label>
                        </div>
                    </li>
                </ul>

                <h3 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">8. Como você classNameifica a autonomia do seu filho?</h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p8-ruim" type="radio" value="ruim" name="entry.861646811" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">ruim</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p8-regular" type="radio" value="regular" name="entry.861646811" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">regular</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p8-boa" type="radio" value="boa" name="entry.861646811" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">boa</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p8-otima" type="radio" value="ótima" name="entry.861646811" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">ótima</label>
                        </div>
                    </li>
                </ul>

                <h3 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">9. Em relação a saúde bucal, seu filho higieniza os dentes sozinho? </h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p9-sim" type="radio" value="Sim" name="entry.548561817" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Sim</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-p9-nao" type="radio" value="Não" name="entry.548561817" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Não</label>
                        </div>
                    </li>
                </ul>

                <h3 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">10. Com qual frequência seu filho vai ao dentista?</h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-1x-2anos" type="radio" value="1 vez a cada 2 anos" name="entry.304801392" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">1 vez a cada 2 anos</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-1x-ano" type="radio" value="1 vez por ano" name="entry.304801392" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">1 vez por ano</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input required id="horizontal-list-radio-2x-ano" type="radio" value="2 vezes por ano" name="entry.304801392" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">2 vezes por ano</label>
                        </div>
                    </li>
                </ul>

                <button className='float-right mt-6 py-2 px-8 bg-pink-500 hover:bg-pink-600 duration-300 text-white shadow p-2 rounded' type='submit'>
                Enviar
                </button>
            </form>
        </div>
        <hr></hr>
    </div>
  );
}
