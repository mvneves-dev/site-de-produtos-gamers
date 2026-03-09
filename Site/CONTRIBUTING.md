# 🤝 Contribuindo para NEVES TECH

Obrigado por seu interesse em contribuir para o projeto NEVES TECH! Este documento fornece diretrizes para contribuições.

## 📋 Código de Conduta

Este projeto segue um Código de Conduta para garantir um ambiente acolhedor e inclusivo. Ao participar, você concorda em manter o respeito e a profissionalismo.

## 🐛 Relatando Bugs

Antes de criar um relatório de bug, verifique a lista de issues, pois pode haver já uma descrição do problema. Se você achar um bug:

1. **Use um título claro e descritivo**
2. **Descreva os passos exatos para reproduzir o problema**
3. **Forneça exemplos específicos para demonstrar**
4. **Descreva o comportamento observado e o que você esperava**
5. **Inclua screenshots e GIFs se possível**
6. **Indique sua configuração (navegador, sistema operacional, etc.)**

## 💡 Sugestões de Melhorias

As sugestões de melhorias são bem-vindas! Se tiver uma ideia:

1. Use um título claro e descritivo
2. Forneça uma descrição detalhada da sugestão
3. Liste alguns exemplos de como a sugestão seria útil
4. Indique como isso diferencia de outras soluções

## 🛠️ Processo de Desenvolvimento

### Configuring Your Environment

1. Fork o repositório
2. Clone seu fork localmente:
```bash
git clone https://github.com/seu-usuario/neves-tech.git
cd neves-tech
```

3. Configure o upstream:
```bash
git remote add upstream https://github.com/usuario-original/neves-tech.git
```

### Criando uma Branch para sua Feature

```bash
# Atualize a branch main
git checkout main
git pull upstream main

# Crie uma nova branch
git checkout -b feature/sua-feature-nome
```

### Fazendo Commits

- Use mensagens de commit claras e descritivas
- Use o imperativo ("adicione" em vez de "adicionei")
- Limpe seu histórico antes de fazer o pull request

```bash
git commit -m "Adicione [descrição curta do que foi feito]"
```

### Enviando suas Mudanças

```bash
# Push para seu fork
git push origin feature/sua-feature-nome
```

## 📝 Pull Request

1. Atualize seu branch com as últimas mudanças upstream
2. Siga o template de pull request
3. Descreva suas mudanças claramente
4. Referencie qualquer issue relacionada (#numero)
5. Aguarde a revisão e feedback

### Template de Pull Request

```markdown
## Descrição
[Breve descrição do que foi mudado]

## Tipo de Mudança
- [ ] Bug fix (mudança não-breaking que corrige um issue)
- [ ] Nova feature (mudança não-breaking que adiciona funcionalidade)
- [ ] Breaking change (fix ou feature que causa mudanças existentes)
- [ ] Documentação

## Testing
[Descrever como você testou as mudanças]

## Screenshots (se aplicável)
[Screenshots ou GIFs das mudanças]

## Checklist
- [ ] Meu código segue o estilo do projeto
- [ ] Executei lint e formatter
- [ ] Testei localmente
- [ ] Adiciei testes ou atualizei testes existentes
- [ ] Atualizei a documentação
```

## 🎨 Guia de Estilo

### JavaScript
- Use `const` por padrão, `let` quando necessário, evite `var`
- Nomes de variáveis em camelCase
- Nomes de classes em PascalCase
- Use arrow functions quando apropriado

```javascript
// Bom ✅
const minhaVariavel = 'valor';
class MinhaClasse {
  metodo = () => {
    console.log('Hello');
  }
}

// Evitar ❌
var minhaVariavel = 'valor';
function minhaFuncao() {
  // ...
}
```

### CSS
- Use classes para estilizar (evite IDs quando possível)
- Mantenha a especificidade baixa
- Use nomes descritivos para classes

```css
/* Bom ✅ */
.btn-primary {
  background-color: #00d4ff;
}

/* Evitar ❌ */
button#btn {
  background-color: #00d4ff;
}
```

### HTML
- Use semântica HTML5
- Atributos em ordem: type, id, name, class, data-*
- Indentação com 4 espaços

```html
<!-- Bom ✅ -->
<button type="submit" id="submit-btn" class="btn btn-primary">
  Enviar
</button>

<!-- Evitar ❌ -->
<button onclick="submit()">Enviar</button>
```

## 📚 Recursos

- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [How to Write Good Commit Messages](https://chris.beams.io/posts/git-commit/)
- [Semantic Versioning](https://semver.org/)

## ❓ Dúvidas?

Sinta-se livre para abrir uma issue ou entrar em contato através do email: contato@nevestech.com.br

## 🎉 Agradecimentos

Obrigado por dedicar tempo contribuindo para melhorar o NEVES TECH!

---

**Desenvolvido com ❤️ pela comunidade**
