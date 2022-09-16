import { h,Component, Prop,State } from "@stencil/core";
import alphaVantageApiKey from '../../keys/AlphaVantageKey.js';

@Component({
    tag: 'stock-finder',
    shadow: true,
    styleUrl: './stock-finder.css'
})
export class StockFinder{

    @Prop({mutable: true, reflect: true}) searchWord: string;
    @State() searchedStocks?: HTMLElement = null;
    @State() loadingElement: HTMLElement = <bx-inline-loading status="inactive"></bx-inline-loading>;

    private searchField?: HTMLInputElement;

    async findStocks(){
        try{
            let res = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.searchWord}&apikey=${alphaVantageApiKey}`);
            
            let symbols = await res.json();
            symbols = symbols['bestMatches'];

            symbols = symbols.map(function(symbol){
                return {
                    symbol: symbol['1. symbol'],
                    name: symbol['2. name']
                };
            });

            return symbols;
        }
        catch(err){
            console.log(err);
        }
    }

    async updateSearchedStocks(){
        this.loadingElement = <bx-inline-loading status="active">Getting Symbols...</bx-inline-loading>
        let searchResults = await this.findStocks();
        this.searchedStocks = (
        <bx-data-table >
            <bx-table size="short">
                <bx-table-head>
                    <bx-table-header-row>
                        <bx-table-header-cell>Symbol</bx-table-header-cell>
                        <bx-table-header-cell>Name</bx-table-header-cell>
                    </bx-table-header-row>
                </bx-table-head>
                <bx-table-body>
                    {
                        searchResults.map(function(result){
                            return (
                            <bx-table-row>
                                <bx-table-cell>{result.symbol}</bx-table-cell>
                                <bx-table-cell>{result.name}</bx-table-cell>
                            </bx-table-row>);
                        })
                    }
                </bx-table-body>
            </bx-table>
        </bx-data-table>);
        if(searchResults.length > 0){
            this.loadingElement = <bx-inline-loading status="finished">Found {searchResults.length} Results for the string: {this.searchWord}</bx-inline-loading>
        }
        else{
            this.loadingElement = <bx-inline-loading status="error">No Results Found for the string: {this.searchWord}</bx-inline-loading>
        }
    }

    render(){
        return [
            <bx-tile class="tile">
                <form action="javascript:void(0)">
                    <bx-form-item>
                        <bx-input 
                            color-scheme="light"
                            ref={el => this.searchField=el} 
                            value={this.searchWord} 
                            onInput={(() => {this.searchWord = this.searchField.value}).bind(this)}
                        >
                            <span slot="label-text">Get Symbols To Show</span>
                            <span slot="helper-text">Search for relevant company symbols using this input</span>
                        </bx-input>
                    </bx-form-item>
                    <div class="search-container">
                        <bx-btn onClick={this.updateSearchedStocks.bind(this)}>Search</bx-btn>
                        {this.loadingElement}
                    </div>
                </form>
                {this.searchedStocks}
            </bx-tile>
        ]
    }
}