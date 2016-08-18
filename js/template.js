var questionTemplate = _.template(" \
  <div class='card question'><span class='question'><%= question %></span> \
    <ul class='options'> \
      <li> \
        <input type='radio' name='question[<%= index %>]' value='0' id='q<%= index %>o1'> \
        <label for='q<%= index %>o1'><%= a %></label> \
      </li> \
      <li> \
        <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2'> \
        <label for='q<%= index %>o2'><%= b %></label> \
      </li> \
      <li> \
        <input type='radio' name='question[<%= index %>]' value='2' id='q<%= index %>o3'> \
        <label for='q<%= index %>o3'><%= c %></label> \
      </li> \
      <li> \
        <input type='radio' name='question[<%= index %>]' value='3' id='q<%= index %>o4'> \
        <label for='q<%= index %>o4'><%= d %></label> \
      </li> \
    </ul> \
  </div> \
  ");