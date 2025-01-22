import { useEffect, useRef, useState } from 'react'
import { CalculateContainer } from './CalculateStyled'

function Calculate() {

    // Criando a referência para o campo "Preço de Compra"
    const purchasePriceRef = useRef<HTMLInputElement>(null);

    // Definindo o estado para os inputs
    const [formData, setFormData] = useState({
        purchasePrice: '',
        costPrice: '',
        averagePrice: '',
        counter: '',
        wholesale: '',
        tableOne: '',
        tableTwo: '',
        tableThree: '',
        tableFour: '',
        tableFive: '',
        tableSix: ''
    });

    // Efeito para focar automaticamente no campo "Preço de Compra" quando o componente for montado
    useEffect(() => {
        if (purchasePriceRef.current) {
          purchasePriceRef.current.focus();
        }
      }, []);
    
    // Função para atualizar os valores dos inputs
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;

        // Atualiza o estado apenas se o valor for um número ou string vazia
        setFormData(prevData => ({
            ...prevData, 
            [id]: value.replace(/[^0-9]./g,'')
        }));
    };

      // Função de validação dos campos obrigatórios
    const validateRequiredFields = () => {
        const { purchasePrice, counter, wholesale } = formData;
        if (!purchasePrice || !counter || !wholesale) {
        alert('Por favor, preencha todos os campos obrigatórios: Preço de Compra, % Balcão e % Atacado.');
        return false;
        }
        return true;
    };

    // Função chamada ao clicar no botão "Calcular"
    const handleCalculate = () => {
        if (!validateRequiredFields()) return; // Valida antes de calcular

        const {
            purchasePrice,
            counter,
            wholesale
        } = formData
        
        // Passo 3: purchasePrice + 10% e setar em tableOne
        const tableOne = parseFloat(purchasePrice) * 1.10;

        // Passo 4: tableOne * 6% e setar em averagePrice
        const averagePrice = tableOne * 0.06;

        // Passo 5: purchasePrice + averagePrice e setar em costPrice
        const costPrice = parseFloat(purchasePrice) + averagePrice;

        // Passo 6: purchasePrice + counter e setar em tableTwo
        const tableTwo = parseFloat(purchasePrice) + (parseFloat(purchasePrice) * parseFloat(counter) / 100)

        // Passo 7: tableTwo - 10% e setar em tableThree
        const tableThree = tableTwo * 0.90;

        // Passo 8: tableTwo - 15% e setar em tableFour
        const tableFour = tableTwo * 0.85;

        // Passo 9: costPrice + wholesale e setar em tableFive
        const tableFive = costPrice + (parseFloat(wholesale) / 100) * costPrice;

        // Passo 10: Adicionar mais 5% ao wholesale e recalcular
        const newWholesale = parseFloat(wholesale) + 5;
        const tableSix = costPrice + (newWholesale / 100) * costPrice;

        // Atualizar o estado com todos os valores calculados
        setFormData(prevData => ({
            ...prevData,
            tableOne: tableOne.toFixed(2),  // Definir até 2 casas decimais
            averagePrice: averagePrice.toFixed(2),
            costPrice: costPrice.toFixed(2),
            tableTwo: Math.ceil(tableTwo).toFixed(2),
            tableThree: Math.ceil(tableThree).toFixed(2),
            tableFour: Math.ceil(tableFour).toFixed(2),
            tableFive: Math.ceil(tableFive).toFixed(2),
            tableSix: Math.ceil(tableSix).toFixed(2),
        }));
    }
  
  return (
    <CalculateContainer>
        <div className="container one">
            <div className="container_purchase_price">
                <label>Preço de Compra</label>
                <input 
                    ref={purchasePriceRef}  // Usando a referência para focar automaticamente
                    type="number" 
                    id='purchasePrice'
                    value={formData.purchasePrice}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="container_cost_price">
                <label>Preço de Custo</label>
                <input type="number" 
                    id='input_cost_price'
                    className='disabled'
                    value={formData.costPrice} 
                    readOnly
                />
            </div>

            <div className="container_average_price">
                <label>Preço Médio</label>
                <input 
                    type="number" 
                    id='input_average_price' 
                    className='disabled' 
                    value={formData.averagePrice}
                    readOnly
                />
            </div>

            <div className="container_counter">
                <label>% Balcão</label>
                <input 
                    type="number" 
                    id='counter' 
                    className='disabled'
                    value={formData.counter}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="container_wholesale">
                <label>% Atacado</label>
                <input type="number" 
                    id='wholesale' 
                    className='disabled'
                    value={formData.wholesale}
                    onChange={handleInputChange}
                    required
                />
            </div>
        </div>

        <div className="container two">
            <div className="sub_container">
                <div className="container_table_one">
                    <label>Tabela 1</label>
                    <input type="number" 
                        id='input_table_one' 
                        className='disabled' 
                        value={formData.tableOne}
                        readOnly
                    />
                </div>

                <div className="container_table_two">
                    <label>Tabela 2</label>
                    <input type="number" 
                        id='input_table_two' 
                        className='disabled'
                        value={formData.tableTwo} 
                        readOnly/>
                </div>

                <div className="container_table_three">
                    <label>Tabela 3</label>
                    <input type="number" 
                        id='input_table_three' 
                        className='disabled' 
                        value={formData.tableThree}
                        readOnly
                    />
                </div>
            </div>

            <div className="sub_container">
                <div className="container_table_four">
                    <label>Tabela 4</label>
                    <input type="number" 
                        id='input_table_four' 
                        className='disabled'
                        value={formData.tableFour} 
                        readOnly/>
                </div>

                <div className="container_table_five">
                    <label>Tabela 5</label>
                    <input type="number" 
                        id='input_table_five' 
                        className='disabled' 
                        value={formData.tableFive}
                        readOnly
                    />
                </div>

                <div className="container_table_six">
                    <label>Tabela 6</label>
                    <input type="number" 
                        id='input_table_six' 
                        className='disabled' 
                        value={formData.tableSix}
                        readOnly
                    />
                </div>
            </div>
                
        </div>

        <div className="container three">
            <button onClick={handleCalculate}>Calcular</button>
        </div>
    </CalculateContainer>
  )
}

export default Calculate
