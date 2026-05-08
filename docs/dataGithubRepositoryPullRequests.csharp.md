# `dataGithubRepositoryPullRequests` Submodule <a name="`dataGithubRepositoryPullRequests` Submodule" id="@cdktn/provider-github.dataGithubRepositoryPullRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryPullRequests <a name="DataGithubRepositoryPullRequests" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests github_repository_pull_requests}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubRepositoryPullRequests(Construct Scope, string Id, DataGithubRepositoryPullRequestsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig">DataGithubRepositoryPullRequestsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig">DataGithubRepositoryPullRequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetBaseRef">ResetBaseRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetHeadRef">ResetHeadRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetSortDirection">ResetSortDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBaseRef` <a name="ResetBaseRef" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetBaseRef"></a>

```csharp
private void ResetBaseRef()
```

##### `ResetHeadRef` <a name="ResetHeadRef" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetHeadRef"></a>

```csharp
private void ResetHeadRef()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetSortBy` <a name="ResetSortBy" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortDirection` <a name="ResetSortDirection" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetSortDirection"></a>

```csharp
private void ResetSortDirection()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubRepositoryPullRequests resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubRepositoryPullRequests.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubRepositoryPullRequests.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubRepositoryPullRequests.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubRepositoryPullRequests.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGithubRepositoryPullRequests resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubRepositoryPullRequests to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubRepositoryPullRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryPullRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.results">Results</a></code> | <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList">DataGithubRepositoryPullRequestsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRefInput">BaseRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRepositoryInput">BaseRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.headRefInput">HeadRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortDirectionInput">SortDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRef">BaseRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRepository">BaseRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.headRef">HeadRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortDirection">SortDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.results"></a>

```csharp
public DataGithubRepositoryPullRequestsResultsList Results { get; }
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList">DataGithubRepositoryPullRequestsResultsList</a>

---

##### `BaseRefInput`<sup>Optional</sup> <a name="BaseRefInput" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRefInput"></a>

```csharp
public string BaseRefInput { get; }
```

- *Type:* string

---

##### `BaseRepositoryInput`<sup>Optional</sup> <a name="BaseRepositoryInput" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRepositoryInput"></a>

```csharp
public string BaseRepositoryInput { get; }
```

- *Type:* string

---

##### `HeadRefInput`<sup>Optional</sup> <a name="HeadRefInput" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.headRefInput"></a>

```csharp
public string HeadRefInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortDirectionInput`<sup>Optional</sup> <a name="SortDirectionInput" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortDirectionInput"></a>

```csharp
public string SortDirectionInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `BaseRef`<sup>Required</sup> <a name="BaseRef" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRef"></a>

```csharp
public string BaseRef { get; }
```

- *Type:* string

---

##### `BaseRepository`<sup>Required</sup> <a name="BaseRepository" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.baseRepository"></a>

```csharp
public string BaseRepository { get; }
```

- *Type:* string

---

##### `HeadRef`<sup>Required</sup> <a name="HeadRef" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.headRef"></a>

```csharp
public string HeadRef { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortDirection`<sup>Required</sup> <a name="SortDirection" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.sortDirection"></a>

```csharp
public string SortDirection { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequests.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryPullRequestsConfig <a name="DataGithubRepositoryPullRequestsConfig" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubRepositoryPullRequestsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BaseRepository,
    string BaseRef = null,
    string HeadRef = null,
    string Id = null,
    string Owner = null,
    string SortBy = null,
    string SortDirection = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.baseRepository">BaseRepository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#base_repository DataGithubRepositoryPullRequests#base_repository}. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.baseRef">BaseRef</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#base_ref DataGithubRepositoryPullRequests#base_ref}. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.headRef">HeadRef</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#head_ref DataGithubRepositoryPullRequests#head_ref}. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#id DataGithubRepositoryPullRequests#id}. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#owner DataGithubRepositoryPullRequests#owner}. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.sortBy">SortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#sort_by DataGithubRepositoryPullRequests#sort_by}. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.sortDirection">SortDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#sort_direction DataGithubRepositoryPullRequests#sort_direction}. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#state DataGithubRepositoryPullRequests#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BaseRepository`<sup>Required</sup> <a name="BaseRepository" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.baseRepository"></a>

```csharp
public string BaseRepository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#base_repository DataGithubRepositoryPullRequests#base_repository}.

---

##### `BaseRef`<sup>Optional</sup> <a name="BaseRef" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.baseRef"></a>

```csharp
public string BaseRef { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#base_ref DataGithubRepositoryPullRequests#base_ref}.

---

##### `HeadRef`<sup>Optional</sup> <a name="HeadRef" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.headRef"></a>

```csharp
public string HeadRef { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#head_ref DataGithubRepositoryPullRequests#head_ref}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#id DataGithubRepositoryPullRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#owner DataGithubRepositoryPullRequests#owner}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#sort_by DataGithubRepositoryPullRequests#sort_by}.

---

##### `SortDirection`<sup>Optional</sup> <a name="SortDirection" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.sortDirection"></a>

```csharp
public string SortDirection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#sort_direction DataGithubRepositoryPullRequests#sort_direction}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_requests#state DataGithubRepositoryPullRequests#state}.

---

### DataGithubRepositoryPullRequestsResults <a name="DataGithubRepositoryPullRequestsResults" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResults.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubRepositoryPullRequestsResults {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryPullRequestsResultsList <a name="DataGithubRepositoryPullRequestsResultsList" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubRepositoryPullRequestsResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.get"></a>

```csharp
private DataGithubRepositoryPullRequestsResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGithubRepositoryPullRequestsResultsOutputReference <a name="DataGithubRepositoryPullRequestsResultsOutputReference" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubRepositoryPullRequestsResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.baseRef">BaseRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.baseSha">BaseSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.draft">Draft</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headOwner">HeadOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headRef">HeadRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headRepository">HeadRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headSha">HeadSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.maintainerCanModify">MaintainerCanModify</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.openedAt">OpenedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.openedBy">OpenedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResults">DataGithubRepositoryPullRequestsResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseRef`<sup>Required</sup> <a name="BaseRef" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.baseRef"></a>

```csharp
public string BaseRef { get; }
```

- *Type:* string

---

##### `BaseSha`<sup>Required</sup> <a name="BaseSha" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.baseSha"></a>

```csharp
public string BaseSha { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Draft`<sup>Required</sup> <a name="Draft" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.draft"></a>

```csharp
public IResolvable Draft { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `HeadOwner`<sup>Required</sup> <a name="HeadOwner" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headOwner"></a>

```csharp
public string HeadOwner { get; }
```

- *Type:* string

---

##### `HeadRef`<sup>Required</sup> <a name="HeadRef" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headRef"></a>

```csharp
public string HeadRef { get; }
```

- *Type:* string

---

##### `HeadRepository`<sup>Required</sup> <a name="HeadRepository" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headRepository"></a>

```csharp
public string HeadRepository { get; }
```

- *Type:* string

---

##### `HeadSha`<sup>Required</sup> <a name="HeadSha" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.headSha"></a>

```csharp
public string HeadSha { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `MaintainerCanModify`<sup>Required</sup> <a name="MaintainerCanModify" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.maintainerCanModify"></a>

```csharp
public IResolvable MaintainerCanModify { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `OpenedAt`<sup>Required</sup> <a name="OpenedAt" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.openedAt"></a>

```csharp
public double OpenedAt { get; }
```

- *Type:* double

---

##### `OpenedBy`<sup>Required</sup> <a name="OpenedBy" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.openedBy"></a>

```csharp
public string OpenedBy { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResultsOutputReference.property.internalValue"></a>

```csharp
public DataGithubRepositoryPullRequestsResults InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubRepositoryPullRequests.DataGithubRepositoryPullRequestsResults">DataGithubRepositoryPullRequestsResults</a>

---



