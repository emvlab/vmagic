import React, { Component } from 'react';
import { Header } from "../../Component";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {MdArrowDropUp} from "react-icons/md";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div id="home">
                <Header page={1} />
                <div className="container">
                    <ul className="list-group positionList">
                        <AnchorLink href="#instalation" className="list-group-item list-group-item-action">Instalação</AnchorLink>
                        <AnchorLink href="#structure" className="list-group-item list-group-item-action">Estrutura do projeto</AnchorLink>
                        <AnchorLink href="#config" className="list-group-item list-group-item-action">Configuração</AnchorLink>
                        <AnchorLink href="#controllerFindBy" className="list-group-item list-group-item-action">Controller</AnchorLink>
                        <AnchorLink href="#controllerFindBy" className="ml-2 list-group-item list-group-item-action text-secondary" style={{fontSize: 15}}>Métodos</AnchorLink>
                        <AnchorLink href="#controllerFindBy" className="ml-2 list-group-item list-group-item-action">FindBy()</AnchorLink>
                        <AnchorLink href="#controllerFindAll" className="ml-2 list-group-item list-group-item-action">FindAll()</AnchorLink>
                        <AnchorLink href="#controllerFindAllParams" className="ml-2 list-group-item list-group-item-action">FindAll(parametros)</AnchorLink>
                        <AnchorLink href="#controllerFindAllJoin" className="ml-2 list-group-item list-group-item-action">FindAll() com join</AnchorLink>
                        <AnchorLink href="#controllerSave" className="ml-2 list-group-item list-group-item-action">Save()</AnchorLink>
                        <AnchorLink href="#controllerUpdate" className="ml-2 list-group-item list-group-item-action">Update()</AnchorLink>
                        <AnchorLink href="#controllerDelete" className="ml-2 list-group-item list-group-item-action">Delete()</AnchorLink>
                        <AnchorLink href="#model" className="list-group-item list-group-item-action">Model</AnchorLink>
                    </ul>
                    <div className="margin">
                        <h1 className="text-secondary">Postgres</h1>
                        <div id="instalation">
                            <h5>Instalando o vMagic</h5>
                            <p className="text-secondary">Instale-o da seguinte maneira usando o npm</p>
                            <p className="text-secondary font-weight-bold">$ npm install -g vmagic-cli</p>
                            <h5 className="mt-2">Depois de instalado, você pode usar o comando vmagic-cli new para criar um novo projeto.</h5>
                            <p className="text-secondary">Por exemplo, para criar um novo projeto chamado emvApi, basta executar:</p>
                            <p className="text-secondary font-weight-bold">$ vmagic-cli new emvApi</p>
                        </div>
                        <div id="config">
                            <h5>Configurando conexão Postgres</h5>
                            <p className="text-secondary">Editar o arquivo: src/Config/core.json</p>
                            <pre className="bg-dark">
                                <code className="text-white">
                                    {`
                                        {
                                            "dataSources" : {
                                                "default" : {
                                                    "dataSource" : "PgSQL",
                                                    "host" : "localhost",
                                                    "port" : 3306,
                                                    "user" : "root",
                                                    "password" : "",
                                                    "database" : "",
                                                    "connectionLimit" : 50 //Caso não informado o padrão será 10
                                                },
                                                "test" : {
                                                    "dataSource" : "PgSQL",
                                                    "host" : "localhost",
                                                    "port" : 3306,
                                                    "user" : "root",
                                                    "password" : "",
                                                    "database" : "",
                                                    "connectionLimit" : 50 //Caso não informado o padrão será 10
                                                }
                                            }
                                        }
                                    `}
                                </code>
                            </pre>
                        </div>

                        <div id="structure">
                            <h5>Após criar um novo projeto, virá com a seguinte estrutura.</h5>
                            <pre className="bg-dark">
                                <code className="text-white">
                                    {`
                                        ├── NomeProjeto/
                                            ├── src/
                                                ├── Config/
                                                    ├──Core.json
                                                ├── Controller/
                                                    ├──ExamplesControllerTest.js
                                                    ├──AppController.js
                                                └── Model/
                                                    ├──Example.js
                                            ├── test/
                                                ├── Controller/
                                                    ├──ExamplesControllerTest.js
                                            ├── Gruntfile.js
                                            ├── init.js
                                            └── package.json
                                    `}
                                </code>
                            </pre>
                        </div>

                        <div className="mt-5" id="controllerFindBy">
                            <h3 className="text-secondary font-weight-bold">Métodos da controller</h3>
                            <h5>FindBy()</h5>
                            <p className="text-secondary">Método usado para buscar por um ou mais campos da base de dados</p>
                            <pre className="bg-dark">
                                <code className="text-white">
                                    {`
                                        'use strict';
                                        const AppController = require('./AppController');
                                        
                                        class ExamplesController extends AppController {
                                        
                                            init() {
                                                this.model('Example');
                                            }
                                            //Função a ser chamada em sua requisição do tipo get - http://127.0.0.1:5555/Examples?id=1
                                            //Caso o nome de sua função for diferente de get() então deverá passar o nome da função junto a chamada.
                                            Ex: http://127.0.0.1:5555/Examples/NomeFuncao/?id=1

                                            get(callback) {
                                                this.Example.findBy({"id": this.query.id}).
                                                    //Este método corresponde ao seguinte sql:
                                                    // SELECT * FROM Example WHERE id = 1;
                                                    then(res => {
                                                        this.logger.info(res);
                                                        //Retorna a resposta para o front end.
                                                        callback(this.responseSuccess(res));
                                                    }).
                                                    catch(err => {
                                                        this.statusCode = 500;
                                                        this.logger.error(err.message)
                                                        callback(this.responseError("Erro", err.message, this.statusCode));
                                                    });
                                            }
                                        }

                                        module.exports = ExamplesController;
                                    `}
                                </code>
                            </pre>
                        </div>

                        <div id="controllerFindAll">
                            <h5>FindAll()</h5>
                            <p className="text-secondary">Método usado para buscar todos os registros da base de dados</p>
                            <pre className="bg-dark">
                                <code className="text-white">
                                    {`
                                        get(callback) {
                                            this.Example.findAll().
                                                //Este método corresponde ao seguinte sql:
                                                // SELECT * FROM Example;
                                                then(res => {
                                                    this.logger.info(res);
                                                    //Retorna a resposta para o front end.
                                                    callback(this.responseSuccess(res));
                                                }).
                                                catch(err => {
                                                    this.statusCode = 500;
                                                    this.logger.error(err.message);
                                                    callback(this.responseError("Erro", err.message, this.statusCode));
                                                });
                                        }
                                    `}
                                </code>
                            </pre>
                        </div>

                        <div id="controllerFindAllParams">
                            <h5>FindAll(parametros)</h5>
                            <p className="text-secondary">Método usado para buscar todos os registros da base de dados</p>
                            <pre className="bg-dark">
                                <code className="text-white">
                                    {`
                                        get(callback) {
                                            //Com parametros;
                                            const params = {
                                                "conditions": [{
                                                    "user_id": this.query.user_id
                                                },{
                                                    "name": this.query.name,
                                                }]
                                            }

                                            //Fazendo buscas pelo nome;
                                            const params = {
                                                "conditions": [{
                                                    "name": '%' + this.query.name + '%',
                                                    "operation": "ILIKE"
                                                }],
                                            }

                                            //Order, Group, Limit;
                                            const params = {
                                                "conditions": [{
                                                    "name": '%' + this.query.name + '%',
                                                    "operation": "ILIKE"
                                                }],
                                                "order": ["name", "id"],
                                                "group": ["name"],
                                                "limit": "10",
                                            }

                                            this.Example.findAll(params).
                                                then(res => {
                                                    this.logger.info(res);
                                                    //Retorna a resposta para o front end.
                                                    callback(this.responseSuccess(res));
                                                }).
                                                catch(err => {
                                                    this.statusCode = 500;
                                                    this.logger.error(err.message);
                                                    callback(this.responseError("Erro", err.message, this.statusCode));
                                                });
                                        }
                                    `}
                                </code>
                            </pre>
                        </div>

                        <div id="controllerFindAllParams">
                            <h5>FindAll com join</h5>
                            <p className="text-secondary">Método usado para buscar os registros da base de dados com join</p>
                            <pre className="bg-dark">
                                <code className="text-white">
                                    {`
                                        get(callback) {
                                            const params = {
                                                "conditions": {
                                                    "user_id": this.query.user_id
                                                },
                                                "join": {
                                                    //Tipo do join(INNER, LEFT);
                                                    "INNER": {
                                                        "table": "tableexample",
                                                        "on": "tableexample.example_id = example.id"
                                                    }
                                                },
                                                "fields": ["tableexample.*", "example.id AS example_id, example.name"]
                                            }

                                            this.Example.findAll(params).
                                                then(res => {
                                                    this.logger.info(res);
                                                    //Retorna a resposta para o front end.
                                                    callback(this.responseSuccess(res));
                                                }).
                                                catch(err => {
                                                    this.statusCode = 500;
                                                    this.logger.error(err.message);
                                                    callback(this.responseError("Erro", err.message, this.statusCode));
                                                });
                                        }
                                    `}
                                </code>
                            </pre>
                        </div>

                        <div id="controllerSave">
                            <h5>Save()</h5>
                            <p className="text-secondary">Método usado para salvar um registro da base de dados</p>
                            <pre className="bg-dark">
                                <code className="text-white">
                                    {`
                                        post(callback) {
                                            this.Example.Save(this.payload).
                                                then(res => {
                                                    this.logger.info(res);
                                                    //Retorna a resposta para o front end.
                                                    callback(this.responseSuccess(res));
                                                }).
                                                catch(err => {
                                                    this.statusCode = 500;
                                                    this.logger.error(err.message);
                                                    callback(this.responseError("Erro", err.message, this.statusCode));
                                                });
                                        }
                                    `}
                                </code>
                            </pre>
                        </div>

                        <div id="controllerSave">
                            <h5>Update()</h5>
                            <p className="text-secondary">Método usado para buscar atualizar um registro da base de dados</p>
                            <pre className="bg-dark">
                                <code className="text-white">
                                    {`
                                        put(callback) {
                                            this.Example.Update(this.payload, {"id": this.id}).
                                                then(res => {
                                                    this.logger.info(res);
                                                    //Retorna a resposta para o front end.
                                                    callback(this.responseSuccess(res));
                                                }).
                                                catch(err => {
                                                    this.statusCode = 500;
                                                    this.logger.error(err.message);
                                                    callback(this.responseError("Erro", err.message, this.statusCode));
                                                });
                                        }
                                    `}
                                </code>
                            </pre>
                        </div>

                        <div id="controllerDelete">
                            <h5>Delete()</h5>
                            <p className="text-secondary">Método usado para excluir um registro da base de dados</p>
                            <pre className="bg-dark">
                                <code className="text-white">
                                    {`
                                        delete(callback) {
                                            this.Example.Delete({"id": this.payload.id}).
                                                then(res => {
                                                    this.logger.info(res.rows);
                                                    //Retorna a resposta para o front end.
                                                    callback(this.responseSuccess(res.rows));
                                                }).
                                                catch(err => {
                                                    this.statusCode = 500;
                                                    this.logger.error(err.message);
                                                    callback(this.responseError("Erro", err.message, this.statusCode));
                                                });
                                        }
                                    `}
                                </code>
                            </pre>
                        </div>

                        <div id="model">
                            <h5>Sobrescrevendo o método findAll()</h5>
                            <p className="text-secondary">Na model pode sobrescrever algum método padão ou criar um novo.</p>

                            <pre className="bg-dark">
                                <code className="text-white">
                                    {`
                                        'use strict';
                                        var AppModel = require('vmagic/AppModel');
                                        
                                        class Example extends AppModel {
                                            init() {
                                                this.useTable = 'example';
                                                //É necessário que instancie o component PgSQL para poder sobrescrever o método.
                                                this.pgsql = this.component('PgSQL');
                                            }

                                            findAll() {
                                                const that = this;
                                        
                                                return new Promise((resolve, reject) => {
                                                    const sql = "select * from example";
                                        
                                                    this.pgsql.connect().
                                                        then(connection => {
                                                            connection.query(
                                                                sql, [],
                                                                function (err, res) {
                                                                    that.pgsql.close(connection);
                                                                    if (err) {
                                                                        reject(err);
                                                                    } else {
                                                                        resolve(res);
                                                                    }
                                                                }
                                                            );
                                                        }).
                                                        catch(err => {
                                                            reject(err);
                                                        });
                                                });
                                            }

                                        }

                                        module.exports = Example;
                                    `}
                                </code>
                            </pre>
                            <h5>Sobrescrevendo o método findBy()</h5>

                            <pre className="bg-dark">
                                <code className="text-white">
                                    {`
                                        findBy(id) {
                                            const that = this;

                                            return new Promise((resolve, reject) => {
                                                const sql = "SELECT * FROM example WHERE id = $1";
                                    
                                                this.pgsql.connect().
                                                    then(connection => {
                                                        connection.query(
                                                            sql, [id],
                                                            function (err, res) {
                                                                that.pgsql.close(connection);
                                                                if (err) {
                                                                    reject(err);
                                                                } else {
                                                                    resolve(res);
                                                                }
                                                            }
                                                        );
                                                    }).
                                                    catch(err => {
                                                        reject(err);
                                                    });
                                            });
                                        }
                                    `}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <AnchorLink href="#home" className="btn btn-secondary backToTop">
                        <MdArrowDropUp size={50} color="#220052" title="Voltar ao topo" />
                    </AnchorLink>
                </div>
            </div>
        )
    }
}