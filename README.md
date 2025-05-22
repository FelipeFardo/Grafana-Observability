# Grafana Observability

Este repositório fornece uma configuração completa para um ambiente de observabilidade utilizando o Grafana, Prometheus, Loki, Tempo, MinIO e outras ferramentas essenciais. O objetivo é facilitar a coleta, armazenamento e visualização de métricas, logs e traces em aplicações modernas.

## 📁 Estrutura do Projeto

- `docker-compose.yaml`: Arquivo principal que orquestra todos os serviços necessários para o ambiente de observabilidade.
- `app/`: Diretório contendo a aplicação de exemplo instrumentada com OpenTelemetry para geração de métricas, logs e traces.
- `config/`: Contém arquivos de configuração personalizados para os serviços utilizados, como Prometheus, Loki e Tempo.
- `minio-data/`: Diretório destinado ao armazenamento de dados do MinIO, utilizado como backend de armazenamento para o Tempo.

## 🚀 Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes softwares instalados:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## 🛠️ Instruções de Uso

### 1. Clonar o Repositório

```bash
git clone https://github.com/FelipeFardo/Grafana-Observability.git
cd Grafana-Observability
```

### 2. Subir os Contêineres

```bash
docker-compose up -d
```

Este comando iniciará todos os serviços definidos no `docker-compose.yaml`, incluindo Grafana, Prometheus, Loki, Tempo, MinIO e a aplicação de exemplo.

### 3. Acessar o Grafana

Após os serviços estarem em execução, acesse o Grafana através do navegador:

```
http://localhost:3000
```

### 4. Explorar os Dashboards

Dentro do Grafana, você encontrará dashboards pré-configurados para visualizar:

- Métricas coletadas pelo Prometheus.
- Logs agregados pelo Loki.
- Traces distribuídos gerenciados pelo Tempo.

Estes dashboards fornecem uma visão abrangente do comportamento da aplicação e da infraestrutura.

## 📦 Serviços Utilizados

- **Grafana:** Plataforma de visualização e análise de dados.
- **Prometheus:** Sistema de monitoramento e alerta para métricas.
- **Loki:** Sistema de agregação e consulta de logs.
- **Tempo:** Backend de rastreamento de traces distribuídos.
- **MinIO:** Armazenamento de objetos compatível com S3, utilizado pelo Tempo.
- **Aplicação de Exemplo:** Serviço instrumentado com OpenTelemetry para geração de dados de observabilidade.

## 📌 Observações

- Certifique-se de que as portas necessárias (por padrão, 3000 para Grafana) estejam disponíveis em sua máquina.
- Os dados persistentes são armazenados nos volumes definidos no `docker-compose.yaml`. Para reiniciar o ambiente do zero, é necessário remover esses volumes.
- Para personalizações adicionais, edite os arquivos de configuração dentro do diretório `config/`.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com melhorias, correções ou sugestões.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
