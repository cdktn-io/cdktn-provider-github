# `dataGithubOrganizationRoleTeams` Submodule <a name="`dataGithubOrganizationRoleTeams` Submodule" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationRoleTeams <a name="DataGithubOrganizationRoleTeams" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_role_teams github_organization_role_teams}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganizationRoleTeams(Construct Scope, string Id, DataGithubOrganizationRoleTeamsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig">DataGithubOrganizationRoleTeamsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig">DataGithubOrganizationRoleTeamsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubOrganizationRoleTeams resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganizationRoleTeams.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganizationRoleTeams.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganizationRoleTeams.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganizationRoleTeams.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGithubOrganizationRoleTeams resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubOrganizationRoleTeams to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubOrganizationRoleTeams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_role_teams#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationRoleTeams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.teams">Teams</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList">DataGithubOrganizationRoleTeamsTeamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.roleIdInput">RoleIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.roleId">RoleId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.teams"></a>

```csharp
public DataGithubOrganizationRoleTeamsTeamsList Teams { get; }
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList">DataGithubOrganizationRoleTeamsTeamsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.roleIdInput"></a>

```csharp
public double RoleIdInput { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.roleId"></a>

```csharp
public double RoleId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeams.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationRoleTeamsConfig <a name="DataGithubOrganizationRoleTeamsConfig" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganizationRoleTeamsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double RoleId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.roleId">RoleId</a></code> | <code>double</code> | The unique identifier of the organization role. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_role_teams#id DataGithubOrganizationRoleTeams#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.roleId"></a>

```csharp
public double RoleId { get; set; }
```

- *Type:* double

The unique identifier of the organization role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_role_teams#role_id DataGithubOrganizationRoleTeams#role_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_role_teams#id DataGithubOrganizationRoleTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubOrganizationRoleTeamsTeams <a name="DataGithubOrganizationRoleTeamsTeams" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganizationRoleTeamsTeams {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubOrganizationRoleTeamsTeamsList <a name="DataGithubOrganizationRoleTeamsTeamsList" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganizationRoleTeamsTeamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.get"></a>

```csharp
private DataGithubOrganizationRoleTeamsTeamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGithubOrganizationRoleTeamsTeamsOutputReference <a name="DataGithubOrganizationRoleTeamsTeamsOutputReference" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganizationRoleTeamsTeamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.slug">Slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.teamId">TeamId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeams">DataGithubOrganizationRoleTeamsTeams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.slug"></a>

```csharp
public string Slug { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.teamId"></a>

```csharp
public double TeamId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeamsOutputReference.property.internalValue"></a>

```csharp
public DataGithubOrganizationRoleTeamsTeams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationRoleTeams.DataGithubOrganizationRoleTeamsTeams">DataGithubOrganizationRoleTeamsTeams</a>

---



