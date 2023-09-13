export const FilterComponent = () => `
    <div class="type-filter-div">
        <div class="inside-type">
            <label for="type_input" class="label-type"></label>
            <select name="select" class="type-input" id="type_input">
                <option hidden selected value="">Selecciona una opción...</option>
                <option value="">Todos</option>
                <option value="Effect Monster">Effect Monster</option>
                <option value="Flip Effect Monster">Flip Effect Monster</option>
                <option value="Gemini Monster">Gemini Monster</option>
                <option value="Normal Monster">Normal Monster</option>
                <option value="Normal Tuner Monster">Normal Tuner Monster</option>
                <option value="Pendulum Effect Monster">Pendulum Effect Monster</option>
                <option value="Pendulum Flip Effect Monster">Pendulum Flip Effect Monster</option>
                <option value="Pendulum Normal Monster">Pendulum Normal Monster</option>
                <option value="Pendulum Tuner Effect Monster">Pendulum Tuner Effect Monster</option>
                <option value="Ritual Effect Monster">Ritual Effect Monster</option>
                <option value="Ritual Monster">Ritual Monster</option>
                <option value="Spell Card">Spell Card</option>
                <option value="Spirit Monster">Spirit Monster</option>
                <option value="Toon Monster">Toon Monster</option>
                <option value="Trap Card">Trap Card</option>
                <option value="Tuner Monster">Tuner Monster</option>
                <option value="Union Effect Monster">Union Effect Monster</option>
                <option value="Fusion Monster">Fusion Monster</option>
                <option value="Link Monster">Link Monster</option>
                <option value="Pendulum Effect Fusion Monster">Pendulum Effect Fusion Monster</option>
                <option value="Synchro Monster">Synchro Monster</option>
                <option value="Synchro Pendulum Effect Monster">Synchro Pendulum Effect Monster</option>
                <option value="Synchro Tuner Monster">Synchro Tuner Monster</option>
                <option value="XYZ Monster">XYZ Monster</option>
                <option value="XYZ Pendulum Effect Monster">XYZ Pendulum Effect Monster</option>
                <option value="Skill Card">Skill Card</option>
                <option value="Token">Token</option>
            </select>
        </div>
        <label for="type_input" class="label-filter-texto" id="label_filter_texto">Tipo:</label>
    </div>

    <div class="atk-filter-div">
        <div class="inside-atk">
            <label for="atk_input" class="label-atk"></label>
            <input type="number" class="atk-input" id="atk_input" placeholder="Cantidad...">
            <select name="select" class="atk-input-filter" id="atk_input_filter">
                <option value="desde">Desde</option>
                <option value="hasta">Hasta</option>
            </select>
        </div>
        <label for="atk_input" class="label-filter-texto" id="label_filter_texto">Ataque:</label>
    </div>

    <div class="def-filter-div">
        <div class="inside-def">
            <label for="def_input" class="label-def"></label>
            <input type="number" class="def-input" id="def_input" placeholder="Cantidad...">
            <select name="select" class="def-input-filter" id="def_input_filter">
                <option value="desde">Desde</option>
                <option value="hasta">Hasta</option>
            </select>
        </div>
        <label for="def_input" class="label-filter-texto" id="label_filter_texto">Defensa:</label>
    </div>

    <div class="level-filter-div">
        <div class="inside-level">
            <label for="level_input" class="label-level"></label>
            <select name="select" class="level-input" id="level_input">
                <option hidden selected value="">Selecciona una opción...</option>
                <option value="">Todos</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
            </select>
        </div>
        <label for="type_input" class="label-filter-texto" id="label_filter_texto">Nivel:</label>
    </div>
    <div class="div-buttons">
        <div class="div-apply">
            <button class="apply-filters" id="apply_filters" type="button">Aplicar</button>
        </div>
            <div class="div-clean">
            <button class="clean-filters" id="clean_filters" type="button"></button>
        </div>
    </div>
`