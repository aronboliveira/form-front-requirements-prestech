import openpyxl
from openpyxl import Workbook
from openpyxl.styles import PatternFill, Font, Alignment
from openpyxl.utils import get_column_letter
from colorama import Fore, init
init(autoreset=True)
def create_form_descriptor() -> None:
  wb = Workbook(data_only=True, keep_links=True)
  ws1 = wb.active
  ws1.title = 'Tech-stacks'
  ws1.append(['Tecnologia', 'Pergunta de Familiaridade', 'Pergunta de Interesse', 'Valores possíveis', 'Opções de Uso', 'Finalidade da Tecnologia'])
  levels = '0 a 5'
  q1 = 'Qual é o seu nível de familiaridade com '
  q2 = 'Qual é o seu nível de interesse em aprender/trabalhar com '
  techs = ['Planilhamento','Redação de Documentos', 
           'Softwares de Planejamento de Recursos de Negócios', 'Softwares de Gerenciamento de Relação com Clientes', 
           'Aplicativos de Gestão de Atividades e Planejamento', 'Aplicativos de Inteligência de Negócios',
           'Construtores de Formulários', 'Aplicativos de Armazenamento em Nuvem',
           'Grande Modelos de Linguagem', 'Inteligências Artificiais Generativas de Imagem', 
           'Inteligências Artificiais Generativas de Vídeo', 'Inteligências Artificiais Generativas de Áudio']
  tech_data = [
        [
            f"{techs[0]} (Microsoft Excel, Google Sheets, Libre Office Calc, etc.)",
            f'{q1}{techs[0]}?',
            f"{q2}{techs[0]}?",
            levels,
            "Fórmulas Avançadas\nTabelas Dinâmicas\nMacros/VBA\nGráficos e Dashboards\nValidação de Dados\nColaboração em Tempo Real",
            "Organizar e analisar dados de forma estruturada"
        ],
        [
            f"{techs[1]} (Microsoft Word, Google Docs, Libre Office Writer, etc.)",
            f"{q1}{techs[1]}?",
            f"{q2}{techs[1]}?",
            levels,
            "Modelos e Templates\nReferências Cruzadas\nMala Direta\nEstilos e Formatação Automática\nExportação para PDF",
            "Criar, editar e formatar documentos"
        ],
        [
          f'{techs[2]} (SAP, SAT, TOTVS, Salesforce, ERPGo, etc.)'
          f'{q1}{techs[2]}?',
          f'{q2}{techs[2]}',
          levels,
          '',
          ''
        ]
        [
          f'{techs[3]} (Monday.com, ClickUp, Slack, Jira, etc.)'
          f'{q1}{techs[3]}?',
          f'{q2}{techs[3]}?',
          levels,
          ''
          ''
        ],
        [
          f'{techs[4]} (Notion, Trello, Microsoft Planner, Google Calendar, etc.)'
          f'{q1}{techs[4]}?',
          f'{q2}{techs[4]}?',
          levels,
          '',
          ''
        ],
        [
          f'{techs[5]} (PowerBI, Qlik Sense, Tableau, etc.)',
          f'{q1}{techs[5]}',
          f'{q2}{techs[5]}',
          levels,
          '',
          ''
        ],
        [
          f'{techs[6]} (Google Forms, Jotform, Typeform, etc)',
          f'{q1}{techs[6]}',
          f'{q2}{techs[6]}',
          '',
          ''
        ],
        [
          f'{techs[7]} (GoogleDrive, Dropbox, Amazon S3, etc)',
          f'{q1}{techs[7]}',
          f'{q2}{techs[7]}',
          '',
          ''
        ]
        [
            f"{techs[8]} — LLMs (ChatGPT, GitHub Copilot, Gemini, LLaMa, etc.)",
            f"{q1}{techs[8]}?",
            f"{q2}{techs[8]}?",
            levels,
            "Geração de Relatórios\nCriação de Scripts e Templates\nAnálise e Resumo de Textos\nTradução Automática\nGeração de Código",
            "Automatizar e otimizar tarefas de redação ou análise de texto"
        ],
        [
          f'{techs[9]} (Dall-E, Midjourney, Stable Diffusion, etc.)',
          f'{q1}{techs[9]}?',
          f'{q2}{techs[9]}?',
          levels,
          ''
        ],
        [
          f'{techs[10]} (Sora, Runway, Fliki, etc.)'
          f'{q1}{techs[10]}?'
          f'{q2}{techs[10]}?',
          levels,
          ''
        ],
        [
          f'{techs[11]} (ElevenLabs, PlayHT, ParrotAI, etc.)'
          f'{q1}{techs[11]}?',
          f'{q2}{techs[11]}?',
          levels,
          ''
        ]
    ]
  for r in tech_data: ws1.append(r)
  ws2 = wb.create_sheet('Geral')
  ws2.append(['Nome do Dado', 'Tipo do Dado', 'Filtros do Dado'])
  general_data = [
    [
      'Nome',
      'Texto',
      'Obrigatório\nNão aceita números ou caracteres especiais'
    ],
    [
      'Nome',
      'Texto',
      'Obrigatório\nNão aceita números ou caracteres especiais'
    ],
    [
      'Idade',
      'Número',
      'Máximo 127\nSomente dígitos numéricos',  
    ],
    [
      'Telefone',
      'Inteiro',
      'Obrigatório\nSó aceita números, hífens e +'
    ],
    [
      'Telefone Secundário',
      'Inteiro',
      'Obrigatório\nSó aceita números, hífens e +'
    ],
  ]
  return None


if __name__ == '__main__':
  create_form_descriptor()
else: 
  print(Fore.RED + 'Directory not authorized for execution')